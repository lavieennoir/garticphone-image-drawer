import Painter from "./painter";
import PainterView from "./painter-view";
import UIInjector from "./ui-injector";

const painter = new Painter();
const painterView = new PainterView(painter);
const uiInjector = new UIInjector(painterView);

uiInjector.inject();
