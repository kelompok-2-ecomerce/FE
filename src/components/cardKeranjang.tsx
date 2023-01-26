import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface cardProps {
  product_id?: number;
  name?: string;
  image?: any;
  harga?: number;
  qty?: number;
}
