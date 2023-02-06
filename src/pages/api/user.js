import { userDetail } from "pages/constants/userDetail"

export const handler = (req, res) => {
  res.status(200).json(userDetail)
}

export default handler