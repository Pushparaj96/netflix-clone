import { useEffect } from 'react';
import LOGO from '../assets/logo.png';
import USER_AVATAR from '../assets/user-avatar.jpg';
import { useSelector } from 'react-redux';
import { useNavigate , useLocation} from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser ,removeUser } from '../utils/userSlicer';
import { useDispatch } from 'react-redux';
import { setShowGptSearch } from '../utils/gptSlice';
import { LANGUAGE_OPTIONS } from '../utils/constants';
import { changeAppLanguage } from '../utils/appConfigSlice';
import SUPPORTED_LANGUAGES from '../utils/languageConstants';
import { clearGptSearchResults } from '../utils/gptSlice';


const Header = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const user = useSelector((store)=>store.user);
  const navigate = useNavigate();
  const isBrowsePage = location.pathname === "/browse";
  const isShowGptSearch = useSelector(store=>store?.gpt?.showGptSearch);
  const selectedLang = useSelector(store=>store?.appConfig?.language);
  


  const handleSignout = () => {
    
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  // controlling routing of signed in user / new user 

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid , email , displayName } = user;
        dispatch(addUser({
          uid:uid,
          email:email,
          displayName:displayName
        }));
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/") ;
      }
    });

    // unsubscribes when the component unmounts
    return () => unsubscribe ();
  },[]);

  const handleGptSearchClick = () => {
      dispatch(setShowGptSearch());
      dispatch(clearGptSearchResults());
  }

  const handleLanguageChange = (e) =>{
      dispatch(changeAppLanguage(e.target.value))
  }

  return (
    <div className={`absolute z-30 w-full flex md:flex-row flex-col justify-between items-center md:px-10 px-5 gap-6 md:gap-0 ${isBrowsePage ? "bg-gradient-to-b from-black" : ""}`}>
        <img src={LOGO} alt="logo" className='md:h-[148px] md:w-[200px] h-[100px] w-[135px] md:ms-10 ms-0 pt-2 md:pt-0 cursor-pointer'/>

        {/* logout button && multi language option*/}
        { user &&
          <div className='flex items-center space-x-3'>
          {
            isShowGptSearch && 
            <select className='me-3 md:py-1 py-0.5 md:px-2 px-1 rounded-md outline-none md:text-lg text-base font-semibold cursor-pointer' value={selectedLang} onChange={handleLanguageChange}>
            {
              LANGUAGE_OPTIONS.map(lang=>(
                <option key={lang.identifier} value={lang.identifier} className='font-semibold'>{lang.name}</option>
              ))
            }
            </select>
          }
          <button className='bg-black border-2 border-green-300 opacity-75 text-green-400 me-3 md:px-4 px-2 md:py-1 py-0.5 rounded-md md:font-extrabold font-medium' onClick={handleGptSearchClick}>{isShowGptSearch?<span className='inline-flex gap-1 items-center'>Home
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={3} className="md:size-5 size-4 stroke-green-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

          </span>:<span className='inline-flex items-center gap-1'>GPT<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="md:size-5 size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>


          </span>}</button>

          
          <img src={USER_AVATAR} alt='avatar' className='md:size-7 size-6 mr-2 hover:scale-105 transition duration-150 cursor-pointer hidden md:block' />
          <span className='font-bold md:text-lg text-base text-red-600 hover:scale-105 transition duration-150 cursor-pointer'>{user.displayName}</span>
          <button className='font-semibold hover:underline px-2 md:text-lg text-base text-white' onClick={handleSignout}>{SUPPORTED_LANGUAGES[selectedLang].logoutBtnText}</button>
          </div>
        }
    </div>
  )
}

export default Header;