import { NotFoundError } from "../../utils/errors.js";
import User from "../../models/User/user.model.js";
import cloudinary from "../../config/cloudinary.js";

export const GetUserProfileController = async (req, res, next) => {
  try {
    const userId = req.user._id;

    const user = await User.findById(userId).select("-password -__v -is_deleted -is_active").lean();

    if (!user) {
      throw new NotFoundError("User not found");
    }

    res.status(200).json({
      message: "User profile fetched successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const UpdateAvatarController = async (req, res, next) => {
  try {
    if (!req.file) throw new BadRequestError("No image provided");

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "avatars",
          format: "webp",
          public_id: `avatar_${req.user.id}`,
          overwrite: true,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(req.file.buffer);
    });

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: uploadResult.secure_url },
      { new: true }
    ).select("-password -__v -is_deleted -is_active").lean();

    res.status(200).json({
      message: "Avatar updated successfully",
      data: user
    });
  } catch (error) {
    next(error);
  }
};

export const UpdateProfileController = async (req, res, next) => {
  try {
    const allowedFields = [
      "name",
      "date_of_birth",
      "gender",
      "phone",
      "communications_email",
      "address",
    ];

    const updateData = Object.keys(req.body)
      .filter((key) => allowedFields.includes(key))
      .reduce((obj, key) => {
        obj[key] = req.body[key];
        return obj;
      }, {});

    if (Object.keys(updateData).length === 0) {
      throw new BadRequestError("No valid fields provided");
    }

    if (updateData.address) {
      const currentUser = await User.findById(req.user.id).select("address").lean();
      
      if (!currentUser) throw new NotFoundError("User not found");

      updateData.address = {
        ...currentUser.address,
        ...updateData.address,
      };
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateData },
      { new: true, runValidators: true }
    )
      .select("-password -__v -is_deleted -is_active")
      .lean();

    if (!user) throw new NotFoundError("User not found");

    res.status(200).json({
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};