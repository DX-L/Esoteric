// 示例：为用户添加设备
function addOrUpdateDevice(userId, deviceType, newToken) {
    User.findById(userId, (err, user) => {
        if (err) {
            console.error(err);
            return;
        }

        const deviceIndex = user.devices.findIndex((d) => d.type === deviceType);
        if (deviceIndex !== -1) {
            // 更新已有设备的 token
            user.devices[deviceIndex].token = newToken;
        } else {
            // 添加新设备
            user.devices.push({ type: deviceType, token: newToken });
        }

        user.save((err) => {
            if (err) console.error('Error updating user devices.', err);
            else console.log('User devices updated successfully.');
        });
    });
}
