import User from '../models/user';

// export const login = async (req, res) => {
//     const { token } = req.body;
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID,
//     });
//     const { name, email, profilePhoto } = ticket.getPayload();

//     const query = {
//         email: email,
//         name: name,
//         profilePhoto: profilePhoto,
//     };

//     const user = await User.findOneAndUpdate(
//         query,
//         ticket.getPayload(),
//         { upsert: true },
//         function (err, doc) {
//             if (err) return res.send(500, { error: err });
//             else res.send(201).json(user);
//         }
//     );

//     // const user = await db.user.upsert({
//     //     where: { email: email },
//     //     update: { name, profilePhoto },
//     //     create: { name, email, profilePhoto },
//     // });

//     // res.send(201).json(user);
// };
