export function ensureAuthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next()
	}
	res.status(401).json({ message: 'Unauthorized' })
}

export function ensureManager(req, res, next) {
	if (req.isAuthenticated() && req.user?.type?.name === 'manager') {
		return next()
	}
	res.status(403).json({ message: 'Forbidden' })
}
export function ensureAdmin(req, res, next) {
	if (req.isAuthenticated() && req.user?.type?.name === 'admin') {
		return next()
	}
	res.status(403).json({ message: 'Forbidden' })
}

export function ensureManagerAndAdmin(req, res, next) {
	if ((req.isAuthenticated() && req.user?.type?.name === 'manager') || req.user?.type?.name === 'admin') {
		return next()
	}
	res.status(403).json({ message: 'Forbidden' })
}
