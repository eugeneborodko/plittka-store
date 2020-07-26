import data from './../../../data.json'

export default ({ query: { contentName } }, res) => {
  const pageData = data[contentName]

  pageData.length > 0 ? res.status(200).json(pageData) : res.status(404).json({ message: `Parameter ${id} not found.` })
}