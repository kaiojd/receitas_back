import Fastify from 'fastify'

const servidor = Fatify();

servidor.get('/usuarios', () => {
    return 'funcionando!'
})

servidor.listen({
    port: 3000
})