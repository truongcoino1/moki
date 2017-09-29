
module.exports = {
  get_profile_by_id(profile, req) {
    profile.find({ id_user: req.body.id_user }, (err, rs) => {
      if (rs.length != 0) {
        return rs[0];
      }
      else {
        return null;
      }

    })
  },
  get_profile_by_token(profile, req) {
    profile.find({ token: req.body.token }, (err, rs) => {
      if (rs.length != 0) {
        return rs[0];
      }
      else {
        return null;
      }

    })
  },

}