import io from 'socket.io-client'
const URL = 'http://192.168.1.49:3000'

const socket = io(URL)

export default socket