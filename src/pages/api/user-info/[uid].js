export const handler = (req, res) => {
  const { uid } = req.query
  const cookies = req.cookies
  res.status(200).json({ name: `Genie ${uid} ${JSON.stringify(cookies)}` })
}

export default handler