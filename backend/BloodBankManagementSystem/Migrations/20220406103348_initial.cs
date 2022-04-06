using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BloodBankManagementSystem.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BloodDonationCamps",
                columns: table => new
                {
                    BloodDonationCampID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CampName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BloodBankID = table.Column<int>(type: "int", nullable: false),
                    CampStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CampEndDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodDonationCamps", x => x.BloodDonationCampID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BloodDonationCamps");
        }
    }
}
