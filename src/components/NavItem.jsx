import { Link } from 'react-router-dom';
const NavItem = ({ icon: Icon, label, to, isOpen, size }) => {
    return (
        <>
            <Link
                to={to}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    color: '#fff',
                    padding: '10px',
                    borderRadius: '5px',
                    transition: 'background-color 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#444')}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
                <Icon size={size} />
                {isOpen && <span>{label}</span>}
            </Link>
        </>
    )
}
export default NavItem;