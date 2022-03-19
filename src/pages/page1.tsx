import { useRecoilValue } from "recoil"
import { testItem } from "../atoms"
import './styles.css'

export default function Page1() {
  const testValue = useRecoilValue(testItem) 
  console.log(testValue)
  return (
    <div className="container">
      <h1>Phrase test: {testValue||'theres no phrase'}</h1>
    </div>
  )
}