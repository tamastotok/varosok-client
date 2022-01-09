import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export default function NavButton({ url, text }) {
  const linkToUrl = () => {
    if (url === '/' && localStorage.getItem('_id')) {
      return `/profile/${localStorage.getItem('_id')}`;
    }
    return url;
  };

  return (
    <div className="nav-btn">
      <Link to={linkToUrl()}>
        <Button className="w-10 mb-2" variant="primary" type="submit">
          {text}
        </Button>
      </Link>
    </div>
  );
}
