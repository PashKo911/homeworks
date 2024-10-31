class MainController {
	static home(req, res) {
		res.render('pages/index', {
			currentPath: req.path,
		})
	}
	static about(req, res) {
		res.render('pages/about', {
			currentPath: req.path,
		})
	}
}

export default MainController
