

export const getWelcomeTemplate = (name) => `
<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color:#1a6b3c;padding:30px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:32px;">Rochetta</h1>
              <p style="color:#a8d5b5;margin:5px 0 0;">Your trusted online pharmacy</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 30px;">
              <h2 style="color:#1a6b3c;">Welcome, ${name}! 👋</h2>
              <p style="color:#555;line-height:1.6;">
                We're thrilled to have you join <strong>Rochetta</strong> — your trusted online pharmacy delivering medicines and care, anytime, anywhere.
              </p>
              <p style="color:#555;line-height:1.6;">Here's what you can do now:</p>
              <ul style="color:#555;line-height:2;">
                <li>💊 Browse thousands of medicines</li>
                <li>🚚 Get free shipping on orders by August</li>
                <li>👨‍⚕️ Consult with certified doctors</li>
                <li>📦 Track your orders in real-time</li>
              </ul>

              <!-- CTA Button -->
              <div style="text-align:center;margin:30px 0;">
                <a href="#" style="background-color:#1a6b3c;color:#ffffff;padding:14px 40px;border-radius:8px;text-decoration:none;font-size:16px;font-weight:bold;">
                  Get Started
                </a>
              </div>
            </td>
          </tr>

          <!-- Categories -->
          <tr>
            <td style="padding:0 30px 30px;">
              <table width="100%" cellpadding="8" cellspacing="0">
                <tr>
                  <td align="center" style="background:#f0f9f4;border-radius:8px;color:#1a6b3c;font-weight:bold;">Pain Relief</td>
                  <td width="10"></td>
                  <td align="center" style="background:#f0f9f4;border-radius:8px;color:#1a6b3c;font-weight:bold;">Cold & Flu</td>
                  <td width="10"></td>
                  <td align="center" style="background:#f0f9f4;border-radius:8px;color:#1a6b3c;font-weight:bold;">Diabetes Care</td>
                  <td width="10"></td>
                  <td align="center" style="background:#f0f9f4;border-radius:8px;color:#1a6b3c;font-weight:bold;">First Aid</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:20px;text-align:center;border-top:1px solid #eee;">
              <p style="color:#999;font-size:12px;margin:0;">
                © 2025 Rochetta. All rights reserved.
              </p>
              <p style="color:#999;font-size:12px;margin:5px 0 0;">
                If you didn't create an account, please ignore this email.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;