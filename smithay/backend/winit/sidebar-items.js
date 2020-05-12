initSidebarItems({"enum":[["Error","Errors thrown by the `winit` backends"],["WinitEvent","Specific events generated by Winit"],["WinitInputError","Errors that may happen when driving the event loop of [`WinitInputBackend`]"]],"fn":[["init","Create a new [`WinitGraphicsBackend`], which implements the [`EGLGraphicsBackend`] and [`GLGraphicsBackend`] graphics backend trait and a corresponding [`WinitInputBackend`], which implements the [`InputBackend`] trait"],["init_from_builder","Create a new [`WinitGraphicsBackend`], which implements the [`EGLGraphicsBackend`] and [`GLGraphicsBackend`] graphics backend trait, from a given [`WindowBuilder`] struct and a corresponding [`WinitInputBackend`], which implements the [`InputBackend`] trait"],["init_from_builder_with_gl_attr","Create a new [`WinitGraphicsBackend`], which implements the [`EGLGraphicsBackend`] and [`GLGraphicsBackend`] graphics backend trait, from a given [`WindowBuilder`] struct, as well as given [`GlAttributes`] for further customization of the rendering pipeline and a corresponding [`WinitInputBackend`], which implements the [`InputBackend`] trait."]],"struct":[["WinitGraphicsBackend","Window with an active EGL Context created by `winit`. Implements the [`EGLGraphicsBackend`] and [`GLGraphicsBackend`] graphics backend trait"],["WinitInputBackend","Abstracted event loop of a [`WinitWindow`] implementing the [`InputBackend`] trait"],["WinitInputConfig","Input config for Winit"],["WinitKeyboardInputEvent","Winit-Backend internal event wrapping `winit`'s types into a [`KeyboardKeyEvent`]"],["WinitMouseInputEvent","Winit-Backend internal event wrapping `winit`'s types into a [`PointerButtonEvent`]"],["WinitMouseMovedEvent","Winit-Backend internal event wrapping `winit`'s types into a [`PointerMotionAbsoluteEvent`]"],["WinitMouseWheelEvent","Winit-Backend internal event wrapping `winit`'s types into a [`PointerAxisEvent`]"],["WinitTouchCancelledEvent","Winit-Backend internal event wrapping `winit`'s types into a [`TouchCancelEvent`]"],["WinitTouchEndedEvent","Winit-Backend internal event wrapping `winit`'s types into a `TouchUpEvent`"],["WinitTouchMovedEvent","Winit-Backend internal event wrapping `winit`'s types into a [`TouchMotionEvent`]"],["WinitTouchStartedEvent","Winit-Backend internal event wrapping `winit`'s types into a [`TouchDownEvent`]"]]});