using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;

namespace WindowsFormsApplication1
{
    class Globales
    {
        #region Elementos de la conexión a la BD

        public const string quote = "\\";
        //cadena de conexión
        public static string SqlCadConexion = "Data Source = PC14" + quote
            + "SQLEXPRESS;Initial Catalog=Negocio;Integrated Security = true";
        //creo el comando de SQL
        public static SqlCommand cmd = new SqlCommand();
        //indicamos que conexion usaremos para sql
        public static SqlConnection Con = new SqlConnection(SqlCadConexion);

        #endregion
    }
}
