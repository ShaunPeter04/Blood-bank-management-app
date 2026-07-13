import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
    return (
        <div style={styles.container}>
            {/* Top Navigation Component */}
            <NavigationBar />

            {/* Hero Header Section */}
            <header style={styles.hero}>
                <h1 style={styles.title}>Blood Bank Management</h1>
                <p style={styles.subtitle}>
                    Welcome to the City Hospital Blood Bank system. Efficiently manage voluntary donors,
                    track real-time medical updates, and streamline life-saving resources.
                </p>
            </header>

            {/* Main Administrative Options */}
            <main style={styles.dashboard}>
                <div style={styles.card}>
                    <div style={styles.icon}>📋</div>
                    <h3>Donor Registration</h3>
                    <p>Register new voluntary donors and log mandatory clinical health parameters.</p>
                </div>

                <div style={styles.card}>
                    <div style={styles.icon}>🔍</div>
                    <h3>Active Inventory</h3>
                    <p>Scan real-time records and filter donor records instantly by blood group.</p>
                </div>
            </main>
        </div>
    )
}

// Clean, modern CSS-in-JS design matching the hospital theme
const styles = {
    container: {
        fontFamily: 'system-ui, -apple-system, sans-serif',
        backgroundColor: '#f8fafc',
        minHeight: '100vh',
        color: '#2d3748',
        margin: 0,
        padding: 0,
    },
    hero: {
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#fff5f5',
        borderBottom: '1px solid #fed7d7',
    },
    title: {
        fontSize: '2.5rem',
        color: '#c92a2a',
        margin: '0 0 15px 0',
        fontWeight: '800',
    },
    subtitle: {
        fontSize: '1.1rem',
        color: '#4a5568',
        maxWidth: '600px',
        margin: '0 auto',
        lineHeight: '1.6',
    },
    dashboard: {
        display: 'flex',
        gap: '24px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '40px auto',
        padding: '0 20px',
    },
    card: {
        flex: '1',
        minWidth: '280px',
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        border: '1px solid #e2e8f0',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
    },
    icon: {
        fontSize: '2rem',
        marginBottom: '15px',
    },
}

export default Home