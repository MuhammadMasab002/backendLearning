const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

// other method to handle async
// const handleAsync = (callback) => {
//   async (req, res, next) => {
//     try {
//       await callback(req, res, next);
//     } catch (error) {
//       req.status(error.code || 500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };
// };
// export { handleAsync };
