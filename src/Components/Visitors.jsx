import React, { useEffect, useState } from 'react';
import { Container, Table, Spinner, Alert } from 'react-bootstrap';
import './Visitors.css'; // Optional custom CSS

const Visitors = () => {
  const [visitors, setVisitors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/visitors/")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        // Sort by visited_at in ascending order (older first, newer last)
        const sortedVisitors = data.sort((a, b) => new Date(a.visited_at) - new Date(b.visited_at));
        setVisitors(sortedVisitors);
        setLoading(false);
      })
      .catch((err) => {
        const localName = localStorage.getItem("userName") || "Guest Visitor";
        setVisitors([
          {
            id: 1,
            name: localName,
            visited_at: new Date().toISOString(),
          },
        ]);
        setError("Something Went Wrong");
        setLoading(false);
      });
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">👥 Visitors List</h2>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {error && (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      )}

      {!loading && !error && visitors.length === 0 && (
        <Alert variant="info" className="text-center">
          No visitors found.
        </Alert>
      )}

      {!loading && visitors.length > 0 && (
        <div className="table-responsive">
          <Table striped bordered hover responsive="md" className="visitors-table">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Visited At</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor, index) => (
                <tr key={visitor.id}>
                  <td>{index + 1}</td>
                  <td>{visitor.name}</td>
                  <td>{new Date(visitor.visited_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
};

export default Visitors;
