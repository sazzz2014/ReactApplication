using System;
using System.ComponentModel.DataAnnotations;

namespace Models.Models
{
    /// <summary>
    /// Класс, описывающий заказ
    /// </summary>
    public class Order
    {
        /// <summary>
        /// Уникальный идентификатор заказа.
        /// </summary>
        public Guid Id { get; set; }
        /// <summary>
        /// Город отправителя
        /// </summary>
        public string SenderCity { get; set; }
        /// <summary>
        /// Адрес отправителя
        /// </summary>
        public string SenderAddress { get; set; }
        /// <summary> 
        /// Город получателя
        /// </summary>
        public string RecipientCity { get; set; }
        /// <summary>
        /// Адрес получателя
        /// </summary>
        public string RecipientAddress { get; set; }
        /// <summary>
        /// Вес груза
        /// </summary>
        public decimal Weight { get; set; }
        /// <summary>
        /// Дата забора груза
        /// </summary>
        public DateTime PickUpDate { get; set; }
    }
}
