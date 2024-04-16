import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Sistemas Informaticos Sur" });
});

router.get("/about", (req, res) => {
  res.render("about", { title: "Acerca de Sistemas Informaticos SUr" });
});

router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contacto" });
});

export default router;
