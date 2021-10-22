import prismaClient from "../prisma"

class GetLast3MessagesService {
    async execute() {

        // o codigo abaixo é equivalente a
        // SELECT * FROM MESSAGES LIMIT 3 ORDER BY CREATED_AT DESC
        
        const messages = await prismaClient.message.findMany({
            take: 3,
            orderBy: {
                created_at: "desc",
            },
            include: {
                user: true,
            },
        })
        return messages
    }
}

export { GetLast3MessagesService }
