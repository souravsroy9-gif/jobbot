export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #1e293b, #0f172a)',
      padding: '20px',
      color: 'white'
    }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>
        🤖 JobBot Pro
      </h1>
      <p style={{ color: '#94a3b8', marginBottom: '20px' }}>
        Agartala, Tripura - Back Office Jobs
      </p>
      
      <div style={{
        background: '#1e293b',
        borderRadius: '12px',
        padding: '20px',
        marginBottom: '15px'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>✅ Bot Status: Active</h2>
        <p style={{ color: '#94a3b8' }}>Searching for jobs in Agartala...</p>
      </div>

      <div style={{
        background: '#1e293b',
        borderRadius: '12px',
        padding: '20px'
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>📋 Your API Keys</h2>
        <p style={{ color: '#22c55e' }}>✓ Gmail API: Connected</p>
        <p style={{ color: '#22c55e' }}>✓ Job Search API: Connected</p>
      </div>
    </div>
  )
}
