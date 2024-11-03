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
  }

  const handleLanguageChange = (e) =>{
      dispatch(changeAppLanguage(e.target.value))
  }

  return (
    <div className={`absolute z-30 w-full flex justify-between items-center px-10  ${isBrowsePage ? "bg-gradient-to-b from-black" : ""}`}>
        <img src={LOGO} alt="logo" className='h-[148px] w-[200px] ms-10 cursor-pointer'/>

        {/* logout button && multi language option*/}
        { user &&
          <div className='flex items-center'>
          {
            isShowGptSearch && 
            <select className='me-3 py-1 px-2 rounded-md outline-none text-lg font-semibold cursor-pointer' value={selectedLang} onChange={handleLanguageChange}>
            {
              LANGUAGE_OPTIONS.map(lang=>(
                <option key={lang.identifier} value={lang.identifier} className='font-semibold'>{lang.name}</option>
              ))
            }
            </select>
          }
          <button className='bg-transparent border-2 border-green-300 opacity-75 text-green-400 me-3 px-4 py-1 rounded-md font-extrabold' onClick={handleGptSearchClick}>{isShowGptSearch?<span className='inline-flex gap-1 items-center'>Back To 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={3} className="size-5 stroke-green-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>

          </span>:<span className='inline-flex items-center gap-1'>GPT<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>


          </span>}</button>

          
          <img src={USER_AVATAR} alt='avatar' className='size-7 mr-2 hover:scale-105 transition duration-150 cursor-pointer' />
          <span className='font-bold text-lg text-red-600 hover:scale-105 transition duration-150 cursor-pointer'>{user.displayName} ,</span>
          <button className='font-semibold hover:underline hover:scale-105 transition duration-150 px-2 text-lg text-white' onClick={handleSignout}>Logout</button>
          </div>
        }
    </div>
  )
}

export default Header;