export type IconsId =
  | "acc"
  | "arrow-down-large"
  | "arrow-down"
  | "arrow-left"
  | "arrow-right"
  | "arrow-up-large"
  | "arrow-up"
  | "cart-number"
  | "cart"
  | "close-large"
  | "close-round"
  | "close"
  | "done-large"
  | "done"
  | "download"
  | "error"
  | "eye-dash"
  | "eye"
  | "frame"
  | "mail_out"
  | "mail"
  | "map"
  | "menu"
  | "minus"
  | "phone"
  | "plus"
  | "search"
  | "shield-yes"
  | "tile"
  | "trash";

export type IconsKey =
  | "Acc"
  | "ArrowDownLarge"
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "ArrowUpLarge"
  | "ArrowUp"
  | "CartNumber"
  | "Cart"
  | "CloseLarge"
  | "CloseRound"
  | "Close"
  | "DoneLarge"
  | "Done"
  | "Download"
  | "Error"
  | "EyeDash"
  | "Eye"
  | "Frame"
  | "MailOut"
  | "Mail"
  | "Map"
  | "Menu"
  | "Minus"
  | "Phone"
  | "Plus"
  | "Search"
  | "ShieldYes"
  | "Tile"
  | "Trash";

export enum Icons {
  Acc = "acc",
  ArrowDownLarge = "arrow-down-large",
  ArrowDown = "arrow-down",
  ArrowLeft = "arrow-left",
  ArrowRight = "arrow-right",
  ArrowUpLarge = "arrow-up-large",
  ArrowUp = "arrow-up",
  CartNumber = "cart-number",
  Cart = "cart",
  CloseLarge = "close-large",
  CloseRound = "close-round",
  Close = "close",
  DoneLarge = "done-large",
  Done = "done",
  Download = "download",
  Error = "error",
  EyeDash = "eye-dash",
  Eye = "eye",
  Frame = "frame",
  MailOut = "mail_out",
  Mail = "mail",
  Map = "map",
  Menu = "menu",
  Minus = "minus",
  Phone = "phone",
  Plus = "plus",
  Search = "search",
  ShieldYes = "shield-yes",
  Tile = "tile",
  Trash = "trash",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Acc]: "61697",
  [Icons.ArrowDownLarge]: "61698",
  [Icons.ArrowDown]: "61699",
  [Icons.ArrowLeft]: "61700",
  [Icons.ArrowRight]: "61701",
  [Icons.ArrowUpLarge]: "61702",
  [Icons.ArrowUp]: "61703",
  [Icons.CartNumber]: "61704",
  [Icons.Cart]: "61705",
  [Icons.CloseLarge]: "61706",
  [Icons.CloseRound]: "61707",
  [Icons.Close]: "61708",
  [Icons.DoneLarge]: "61709",
  [Icons.Done]: "61710",
  [Icons.Download]: "61711",
  [Icons.Error]: "61712",
  [Icons.EyeDash]: "61713",
  [Icons.Eye]: "61714",
  [Icons.Frame]: "61715",
  [Icons.MailOut]: "61716",
  [Icons.Mail]: "61717",
  [Icons.Map]: "61718",
  [Icons.Menu]: "61719",
  [Icons.Minus]: "61720",
  [Icons.Phone]: "61721",
  [Icons.Plus]: "61722",
  [Icons.Search]: "61723",
  [Icons.ShieldYes]: "61724",
  [Icons.Tile]: "61725",
  [Icons.Trash]: "61726",
};
