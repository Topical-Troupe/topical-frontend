// import React from 'react'

// class Login extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       password: '',
//       error: null
//     }
//     this.handleLogin = this.handleLogin.bind(this)
//   }

//   function getToken (username, password) {
//     return request.post('/api/auth/token/login', {
//       username: username,
//       password: password
//     }).then(response => response.data.auth_token)
//   }

//   handleLogin (event) {
//     event.preventDefault()
//     getToken(this.state.username, this.state.password)
//       .then(token => {
//         this.props.setToken(token)
//         window.localStorage.setItem('login_auth_token', token)
//         window.localStorage.setItem('login_username', this.state.username)
//         console.log('token')
//       }

//       )
//       .catch(error => {
//         console.log(error)
//         this.setState({ error: 'There is no user with that Username and Password' })
//       })
//   }

//   render () {
//     return (

//       <div className='login'>
//         <div className='login-form'>
//           <form onSubmit={this.handleLogin}>
//             <div>
//               {this.state.error}
//             </div>
//             <div>
//               <label htmlFor='username'>Username</label>
//               <input id='username' type='text' value={this.state.username} onChange={event => this.setState({ username: event.target.value })} />
//             </div>
//             <div>
//               <label htmlFor='password'>Password</label>
//               <input id='password' type='text' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} />
//             </div>
//             <div>
//               <button type='submit' className='login-button'>Submit</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default Login
