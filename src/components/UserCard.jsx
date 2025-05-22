import './css/UserCard.css';
import { Button } from './Button';

export const UserCard = ({ user, onDelete }) => {
    return (
        <div className="user-card">
            <img 
                src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`} 
                alt={user.name} 
                className="user-avatar"
            />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <Button onClick={() => onDelete(user.id)} variant="danger">
                Eliminar
            </Button>
        </div>
    );
}
