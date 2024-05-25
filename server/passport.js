const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const prisma = require("@prisma/client");
const Prisma = new prisma.PrismaClient();

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function async (accessToken, refreshToken, profile, callback) {
			return callback(null, profile);
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});
