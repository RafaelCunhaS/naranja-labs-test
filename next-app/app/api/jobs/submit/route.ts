import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  age: z.number(),
  phone: z.string(),
  state: z.string(),
  city: z.string()
})

export const POST = async (req: Request) => {
  try {
    const data = schema.parse(await req.json())

    return Response.json(
      {
        message: `Thank you for your application, ${data.name}`
      },
      { status: 201 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { path: error.errors[0].path[0], message: error.errors[0].message },
        { status: 400 }
      )
    }

    return Response.json({ message: 'Failed to submit job application' }, { status: 500 })
  }
}
