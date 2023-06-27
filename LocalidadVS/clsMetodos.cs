using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Windows.Forms;

namespace WindowsFormsApplication1
{
    class clsMetodos
    {
        #region Metodo para cargar la consulta SQL en DataAdapter

        public static DataTable GetSql(string mySql)
        {
            //DataTable para retorno
            DataTable myDataTable = new DataTable();
            //Abro la conexión a la base de datos
            Globales.Con.Open();
            //Declaro el comando y le paso los parametros
            SqlCommand cmd = new SqlCommand(mySql, Globales.Con);
            //Declaro el adaptador y los instancio
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            //Paso los datos de la consulta al DataAdapter
            adapter.Fill(myDataTable);
            //Cierro la conexion
            Globales.Con.Close();
            //Retornar DataTable
            return myDataTable;
        }

        #endregion

        #region Metodo que cargar los combos

        public static void CargarCombo(ComboBox nombreCombo, string TablaOrigenDatos,
            string CampoAMostrar, string idTabla)
        {
            //creo la tabla
            DataTable myDataTable = new DataTable();
            //Llamo al metodo que lee la base de edatos y cargo las filas a la tabla
            myDataTable = GetSql("SELECT * FROM " + TablaOrigenDatos + " ORDER BY " + CampoAMostrar);
            //Asigno los valores recibidos de la consulta al combo
            //Nombre de la columna a mostrar
            nombreCombo.DisplayMember = CampoAMostrar;
            //Clave primaria de la tabla(id)
            nombreCombo.ValueMember = idTabla;
            //Devuelve una tabla y esa asignada al combo
            nombreCombo.DataSource = myDataTable;
        }

        #endregion
    }
}
