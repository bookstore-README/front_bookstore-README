import { signOut } from "next-auth/react";

function SignOutButton() {
   const handleLogoutClick = () => {
     signOut({ callbackUrl: '/signin' });
   };
  
  return <button className="text-15 mobile:hidden" onClick={handleLogoutClick}>로그아웃</button>;
}

export default SignOutButton;
