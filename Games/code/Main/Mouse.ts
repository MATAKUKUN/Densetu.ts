class Mouse{
    static mouse_x
    static mouse_y
static onClick(e) {
    var rect = e.target.getBoundingClientRect();
    Mouse.mouse_x = e.clientX - rect.left;
    Mouse.mouse_y = e.clientY - rect.top;
    
}
}