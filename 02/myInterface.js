"use strict";
const mateo = { dbId: 222, email: "m@m.com", userId: 2211,
    startTrial: () => { return "trial started"; },
    getCoupon: (name, off) => { return off; }
};
mateo.email = "m@google.com";
