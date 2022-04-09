using Microsoft.EntityFrameworkCore.Migrations;

namespace BloodBankManagementSystem.Migrations
{
    public partial class Mig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BloodBanks",
                table: "BloodBanks");

            migrationBuilder.RenameTable(
                name: "BloodBanks",
                newName: "BloodBank");

            migrationBuilder.RenameColumn(
                name: "City",
                table: "BloodBank",
                newName: "city");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "BloodBank",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<int>(
                name: "BloodBankId",
                table: "BloodBank",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BloodBank",
                table: "BloodBank",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BloodBank",
                table: "BloodBank");

            migrationBuilder.RenameTable(
                name: "BloodBank",
                newName: "BloodBanks");

            migrationBuilder.RenameColumn(
                name: "city",
                table: "BloodBanks",
                newName: "City");

            migrationBuilder.AlterColumn<int>(
                name: "BloodBankId",
                table: "BloodBanks",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .Annotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "BloodBanks",
                type: "int",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int")
                .OldAnnotation("SqlServer:Identity", "1, 1");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BloodBanks",
                table: "BloodBanks",
                column: "BloodBankId");
        }
    }
}
