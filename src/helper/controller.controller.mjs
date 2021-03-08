export class Controller {
  handleResponse(result, res) {
    if (result.code && result.code === 500) {
      return res.status(500).json({ message: result.message });
    }

    if (result.message) {
      return res.status(400).json({ message: result.message });
    }

    return res.status(200).json(result);
  }
}
