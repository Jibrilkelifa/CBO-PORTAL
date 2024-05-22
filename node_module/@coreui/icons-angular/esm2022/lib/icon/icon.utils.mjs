export function toCamelCase(str) {
    return str.replace(/([-_][a-z0-9])/ig, ($1) => {
        return $1.toUpperCase().replace('-', '');
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi51dGlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmV1aS1pY29ucy1hbmd1bGFyL3NyYy9saWIvaWNvbi9pY29uLnV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sVUFBVSxXQUFXLENBQUMsR0FBVztJQUNyQyxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRTtRQUNwRCxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLV9dW2EtejAtOV0pL2lnLCAoJDE6IHN0cmluZykgPT4ge1xuICAgIHJldHVybiAkMS50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJy0nLCAnJyk7XG4gIH0pO1xufVxuIl19