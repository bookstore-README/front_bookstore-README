import Link from "next/link"
function SignUpButton(){
  return<Link href="/signup" className="mobile:hidden">
  <div className="text-15 cursor-pointer ">회원가입</div>
</Link>
}
export default SignUpButton