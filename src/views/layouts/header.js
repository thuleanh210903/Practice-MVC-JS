import Logo from '../../resource/assets/images/Logo.png';
import search from '../../resource/assets/icons/search-normal.svg';
import bag from '../../resource/assets/icons/bag.svg';
import notification from '../../resource/assets/icons/notification.svg';
const Header = () => {
  const storedUser = localStorage.getItem('users');
  const user = storedUser ? JSON.parse(storedUser) : null;
  if (!user) {
    return `
        <header id="header-container" class="header container">
            <div class="header-logo">
                <img src="${Logo}" />
            </div>

            <div class="header-content">
              <div class="header-search">
                    <img src="${search}" />
                    <input type="text" placeholder="Search your food" class="header-search_input">
                </div>
                
                <div class="header-action">
                  <div class="header-bag">
                    <img src ="${bag}" />
                  </div>
                  <div class="header-notify">
                    <img src ="${notification}" />
                  </div>
                </div>
            </div>
        </header>
        `;
  } else {
    return `
    `;
  }
};

export default Header;
