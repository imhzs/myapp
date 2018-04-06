export const Role = (requiredRole: string, redirectRoute = 'LoginPage') => {
  return (target: any) => {
    target.prototype.ionViewCanEnter = function () {
      if (requiredRole === 'Logined') {
        if (this.auth === undefined) {
          throw new Error('@Role requires the target component to have a property called auth that is the injected auth service');
        }
        this.auth.CheckToken();
        return false;
      }
    }
  }
}