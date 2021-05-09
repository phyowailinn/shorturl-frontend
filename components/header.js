import Link from 'next/link';

const Header = () => (
  <header>
  <div id="top">
    <div id="logo">
        <Link href="/">
          <a className="logo">Short URL</a>
        </Link>
    </div>
  </div>
  </header>
);

export default Header;
