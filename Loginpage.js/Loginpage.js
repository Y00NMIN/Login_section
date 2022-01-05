import React, {useState} from 'react'

function LoginPage() {

	const [Email,setEmail] = useState("")
	const [password,setPassword] = useState("")
	
	const onEmailHandler = (event) =>{
		setEmail(event.currenTarget.value)
	}
	const onPasswordHandler = (event) =>{
		setPassword(event.currenTarget.value)
	}

	const onSubmitHandler= (event) =>{
		event.preventDefault(); //페이지 미 새로고침 구문
	}

	
	return(
		<div style{{
		display: 'flex', justifyContent:'center', alignItems:'center',width:'100%', height: '100vh'
		}}>

			<form style={{display:'flex', flexDirection:'column'}}
				onSubmit={onSubmitHandler}
			>
				<label>Email</label>
				<input type="email" value={Email} onChange={onEmailHandler} />
				<label>Password</label>
				<input type="password" value={Password} onChange={onPasswordHandler} />
				<br/>
			<button>
				Login
			</button>
			</form>
			LoginPage
		</div>
	)
}

export default LoginPage