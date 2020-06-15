"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTicketRouter = void 0;
const express_1 = __importDefault(require("express"));
const common_1 = require("@bcreightickets/common");
const router = express_1.default.Router();
exports.createTicketRouter = router;
router.post('/api/tickets', common_1.requireAuth, (req, res) => {
    res.sendStatus(200);
});
//# sourceMappingURL=new.js.map