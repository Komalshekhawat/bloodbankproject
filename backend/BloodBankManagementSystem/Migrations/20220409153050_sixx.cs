using Microsoft.EntityFrameworkCore.Migrations;

namespace BloodBankManagementSystem.Migrations
{
    public partial class sixx : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BloodDonationCamps",
                table: "BloodDonationCamps");

            migrationBuilder.RenameTable(
                name: "BloodDonationCamps",
                newName: "BloodDonationCampstable");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BloodDonationCampstable",
                table: "BloodDonationCampstable",
                column: "BloodDonationCampID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BloodDonationCampstable",
                table: "BloodDonationCampstable");

            migrationBuilder.RenameTable(
                name: "BloodDonationCampstable",
                newName: "BloodDonationCamps");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BloodDonationCamps",
                table: "BloodDonationCamps",
                column: "BloodDonationCampID");
        }
    }
}
