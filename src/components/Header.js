import { useEffect } from 'react';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { addUser ,removeUser } from '../utils/userSlicer';
import { useDispatch } from 'react-redux';


const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((store)=>store.user);
  const navigate = useNavigate();


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
  },[])

  return (
    <div className='relative flex justify-between items-center px-10'>
        <img src={logo} alt="logo" className='h-[148px] w-[200px] ms-10 cursor-pointer'/>

        {/* logout button */}
        { user &&
          <div className='flex items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="#c81226" className="size-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span className='font-bold text-lg text-red-600'>{user.displayName} ,</span>
          <button className='font-semibold hover:underline px-2 text-lg' onClick={handleSignout}>Logout</button>
          </div>
        }
    </div>
  )
}

export default Header;