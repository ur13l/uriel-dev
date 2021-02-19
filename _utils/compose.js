/**
 * La función compose es una High Order Function que permite ejecutar varias funciones en cadena, utilizando reduce.
 * Los argumentos ...fns albergan cualquier número de funciones a ejecutar en formato de arreglo.
 * La función reduce se ejecuta para que el arreglo pasado vaya ejecutando las funciones una por una, pasando el
 * argumento inicial a la primera función, posteriormente el resultado de su ejecución se pasa a la siguiente.
 * El segundo argumento de reduce es el argumento inicial.
 */
export const compose =
    (...fns) =>
            arg => fns.reduce((composed,f) => f(composed), arg);
