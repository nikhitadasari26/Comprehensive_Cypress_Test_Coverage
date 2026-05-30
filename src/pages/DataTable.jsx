import React, { useState, useMemo, useEffect } from 'react';
import { generateMockData } from '../mockData';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'id', direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    setData(generateMockData());
  }, []);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredData = useMemo(() => {
    return data.filter(item => 
      Object.values(item).some(val => 
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [data, searchQuery]);

  const sortedData = useMemo(() => {
    let sortableItems = [...filteredData];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [filteredData, sortConfig]);

  // Adjust current page if search results change and page goes out of bounds
  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * pageSize;
    return sortedData.slice(startIndex, startIndex + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const columns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'region', label: 'Region' },
    { key: 'revenue', label: 'Revenue ($)' },
    { key: 'signupDate', label: 'Signup Date' }
  ];

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <ChevronDown size={14} style={{ opacity: 0.3 }} />;
    return sortConfig.direction === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />;
  };

  return (
    <div className="glass" style={{ padding: '2rem' }}>
      <h1 style={{ marginTop: 0 }}>Data Explorer</h1>
      
      <div className="table-controls">
        <div style={{ position: 'relative', width: '300px' }}>
          <Search size={18} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input
            data-testid="search-input"
            type="text"
            placeholder="Search data..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ paddingLeft: '35px' }}
          />
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>Rows per page:</span>
          <select
            data-testid="page-size-select"
            value={pageSize}
            onChange={(e) => {
              setPageSize(Number(e.target.value));
              setCurrentPage(1);
            }}
            style={{ width: 'auto' }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <table data-testid="data-table">
          <thead>
            <tr>
              {columns.map(col => (
                <th 
                  key={col.key} 
                  data-testid={`table-header-${col.key}`}
                  onClick={() => handleSort(col.key)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {col.label}
                    <span data-testid={`sort-${col.key}`}>
                      {getSortIcon(col.key)}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, index) => (
                <tr key={row.id} data-testid={`table-row-${index}`}>
                  {columns.map(col => (
                    <td key={col.key}>
                      {col.key === 'status' ? (
                        <span style={{ 
                          padding: '0.25rem 0.5rem', 
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          backgroundColor: row[col.key] === 'Active' ? 'rgba(16, 185, 129, 0.2)' : 
                                         row[col.key] === 'Pending' ? 'rgba(245, 158, 11, 0.2)' :
                                         'rgba(239, 68, 68, 0.2)',
                          color: row[col.key] === 'Active' ? '#10b981' : 
                                 row[col.key] === 'Pending' ? '#f59e0b' :
                                 '#ef4444'
                        }}>
                          {row[col.key]}
                        </span>
                      ) : (
                        row[col.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} style={{ textAlign: 'center', padding: '2rem' }}>
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div data-testid="pagination-controls" className="pagination">
        <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
          Showing {sortedData.length === 0 ? 0 : (currentPage - 1) * pageSize + 1} to {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length} entries
        </div>
        
        <div className="pagination-buttons">
          <button
            data-testid="prev-page-button"
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem' }}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1 || sortedData.length === 0}
          >
            Previous
          </button>
          
          <span data-testid="page-number" style={{ margin: '0 1rem', fontWeight: 600 }}>
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            data-testid="next-page-button"
            className="btn btn-secondary"
            style={{ padding: '0.5rem 1rem' }}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage >= totalPages || sortedData.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
