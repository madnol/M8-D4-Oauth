const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const UserModel = require("../users/schema");
const { authenticate } = require("./tools");

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "http://localhost:3001/users/googleRedirect",
    },
    async (request, accessToken, refreshToken, profile, next) => {
      console.log(profile);
      const newUser = {
        googleId: profile.id,
        name: profile.name.givenName,
        surname: profile.name.familyName,
        email: profile.emails[0].value,
        role: "User",
        refreshTokens: [],
      };

      try {
        const user = await UserModel.findOne({ googleId: profile.id });
        console.log(user);
        if (!user) {
          //check if exist
          const createdUser = new UserModel({
            googleId: profile.id,
            firstname: profile.name.familyName,
            lastname: profile.givenName,
            email: profile.emails[0].value,
            role: "User",
          });
          //   await createdUser.save();
          console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
          console.log(createdUser);
          const tokens = await authenticate(createdUser);

          next(null, { user: createdUser, tokens });
        } else {
          //if not exist generate tokens
          const tokens = await authenticate(user);
          next(null, { user, tokens });
        }
      } catch (error) {
        next(error);
      }
    }
  )
);

passport.serializeUser(function (user, text) {
  next(null, user);
});
